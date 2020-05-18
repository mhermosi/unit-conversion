void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/mhermosi/unit-conversion"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
   agent any

   stages {
      stage('Dowunload Source code') {
          steps {
                git branch: 'master', 
                    credentialsId: 'jk_gh_uc', 
                    url: 'git@github.com:mhermosi/unit-conversion.git'
            }
        }
      
      stage('Install yarn') {
          steps {
                parallel(
                    client: {
                        nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                            sh 'cd client && npm install yarn'
                        }
                    },
                    server: {
                        nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                            sh 'cd server && npm install yarn'
                        }
                    }
                )
          }
      }
      stage('yarn install') {
            steps {
                parallel(
                    client: {
                        nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                            sh 'cd client && yarn'
                        }
                    },
                    server: {
                        nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                            sh 'cd server && yarn'
                        }
                    }
                )
            }   
      }
      stage('Test') {
          steps {
            parallel(
                client: {
                    nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                        sh 'export CI=true;cd client && yarn test'
                    }
                },
                server: {
                    nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                        sh 'export CI=true;cd server && yarn test'
                    }
                }
            )
          }
      }
      stage('Build Client') {
          steps {
            nodejs(nodeJSInstallationName: 'nodejs-12.16.1') {
                sh 'export CI=true;cd client && yarn build'
            }
          }
      }
      stage('Build Docker Images') {
          steps {
              parallel(
                  client: {
                      sh 'curl -X POST https://hub.docker.com/api/build/v1/source/716d8fa0-9c68-46a1-bf94-f250a5604201/trigger/94a657be-b65a-4ecb-bf99-42b2349b72d8/call/'
                  },
                  server: {
                      sh 'curl -X POST https://hub.docker.com/api/build/v1/source/493e91c4-190e-44e0-86fa-d588f624944e/trigger/b9d6bea7-4276-4c2b-b90f-0301de0d38c4/call/'
                  }
              )
          }
      }
      stage('EC2 Deployment') {
          steps {
            sh 'cd deployment && scp -r * ubuntu@unit.clcklabs.com:'
            sh 'ssh ubuntu@unit.clcklabs.com "chmod +x rundocker.sh && ./rundocker.sh"'
          }
      }

   }

   post {
       success {
           setBuildStatus("Build succeeded", "SUCCESS")
       }

       failure {
           setBuildStatus("Build failed", "FAILURE")
       }
   }     
}

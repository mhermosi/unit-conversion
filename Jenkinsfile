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
   }     
}

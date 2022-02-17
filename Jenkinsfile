/*pipeline {
    agent any
    stages {
        stage('Open') {
            steps {
                nodejs('node-14.18.2'){
                    sh 'yarn install'
                }
            }
        }
    }
    stages {
        stage('Test') {
            steps {
                nodejs('node-14.18.2'){
                    sh 'yarn run cypress run'
                }
            }
            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}*/

pipeline {
    agent any
    stages {
        stage('Open') {
            steps {
                nodejs('node-14.18.2'){
                    sh 'yarn install'
                }
            }
        }
        stage('Test') {
            steps {
                nodejs('node-14.18.2'){
                sh 'yarn run cypress run'
            }
        }
        post {
            always {
                junit 'build/test-results/test/*.xml'
            }
        }
    }
}
/*pipeline {
    agent any
    stages {
        stage('Clean') {
            steps {
                sh 'yarn run cypress run'
            }
        }
        stage('Test') {
            steps {
                sh './gradlew test'
            }
            post {
                always {
                    junit 'build/test-results/test/*.xml'
                }
            }
        }
    }
}*/

pipeline {
    agent any
    stage('Test') {
        steps {
            sh 'yarn run cypress run'
        }
        post {
            always {
                junit ' sh cy:ci'
            }
        }
    }
}
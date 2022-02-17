pipeline {
    agent any
    stage('Start') {
        steps {
        sh 'yarn install'
        }
    }
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
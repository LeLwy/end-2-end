pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    if (isUnix()) {
                        sh 'chmod +x ./mvnw && ./mvnw install'
                    } else {
                        bat '.\\mvnw.cmd install'
                    }
                }
            }
        }
    }
}

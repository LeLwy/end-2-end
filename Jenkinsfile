pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                chmod +x ./mvnw
                ./mvnw install
            }
        }
    }
}
pipeline {
    agent any

    environment {
        // Biar Jenkins tahu kita pakai Go
        GO111MODULE = 'on'
        CGO_ENABLED = '0'
    }

    stages {
       stage('Checkout') {
            steps {
                echo 'Pulling latest code...'
                checkout scm
                echo 'Code pulled successfully.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying with Docker Compose...'
            }
        }

        stage('Migrate DB') {
            steps {
                echo 'Running database migrations...'
            }
        }
     
    }

    post {
        success {
            echo '✅ Build and deploy completed successfully.'
        }
        failure {
            echo '❌ Build or deploy failed.'
        }
    }
}

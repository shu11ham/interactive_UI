pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout([
                  $class: 'GitSCM',
                  branches: [[name: '*/main']],   // change to master if needed
                  userRemoteConfigs: [[
                    url: 'git@github.com:shu11ham/interactive_UI.git',
                    credentialsId: 'ssh_key'
                  ]]
                ])
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh '''
                docker compose down --volumes || true
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker compose build
                '''
            }
        }

        stage('Start Containers') {
            steps {
                sh '''
                docker compose up -d
                '''
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }

    post {
        success {
            echo "✅ UI deployed successfully via NGINX!"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}


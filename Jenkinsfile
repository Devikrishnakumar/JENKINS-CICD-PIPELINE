pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-cicd-pipeline"
        CONTAINER_NAME = "jenkins-cicd-container"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm $IMAGE_NAME:$BUILD_NUMBER npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f $CONTAINER_NAME || true
                    docker run -d \
                        --name $CONTAINER_NAME \
                        -p 3000:3000 \
                        $IMAGE_NAME:$BUILD_NUMBER
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully.'
        }

        failure {
            echo 'CI/CD Pipeline failed.'
        }
    }
}
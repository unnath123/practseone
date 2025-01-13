pipeline 
{
    agent any

    stages {
        stage('Build') 
        {
            steps 
            {
                echo 'Build app'
            }
        }
            stage('Test') 
        {
            steps 
            {
                echo 'Test App'
            }
        }
            stage('Deploy') 
        {
            steps 
            {
                echo 'deploy App'
            }
        }
    }
    post{
        always{
            emailext body: 'summary of the status', subject: 'test pipline', to: 'elves1999sydney@gmail.com'
        }
    }
}

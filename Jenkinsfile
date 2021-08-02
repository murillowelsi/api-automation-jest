pipeline {
  agent {
    docker {
      image 'node:alpine'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }
    stage('UK SM Tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'yarn test:$ENV:uk'  
        }
      }
      post {
        always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, 
          keepAll: false, reportDir: 'report/jest-stare', reportFiles: '*.html', 
          reportName: 'UK - TDA Automation Tests Reports', reportTitles: ''])
        }
      }
    }
    stage('NL SM Tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'yarn test:$ENV:nl'
        }
      }
      post {
        always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, 
          keepAll: false, reportDir: 'report/jest-stare', reportFiles: '*.html', 
          reportName: 'NL - TDA Automation Tests Reports', reportTitles: ''])
        }
      }
    }
    stage('BE SM Tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'yarn test:$ENV:be'
        }
      }
      post {
        always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, 
          keepAll: false, reportDir: 'report/jest-stare', reportFiles: '*.html', 
          reportName: 'BE - TDA Automation Tests Reports', reportTitles: ''])
        }
      }
    }
    stage('NO SM Tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'yarn test:$ENV:no'
        }
      }
      post {
        always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, 
          keepAll: false, reportDir: 'report/jest-stare', reportFiles: '*.html', 
          reportName: 'NO - TDA Automation Tests Reports', reportTitles: ''])
        }
      }
    }
    stage('DE SM Tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'yarn test:$ENV:de'
        }
      }
      post {
        always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, 
          keepAll: true, reportDir: 'report/jest-stare', reportFiles: '*.html', 
          reportName: 'DE - TDA Automation Tests Reports', reportTitles: ''])
        }
      }
    }
  }
}

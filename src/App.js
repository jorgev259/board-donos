import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import info from './info.json'
const { goalText, goalNumber, currentNumber } = info

const url = (window.location !== window.parent.location)
  ? document.referrer
  : document.location.href

console.log(url)

function App () {
  const percent = currentNumber / goalNumber * 100
  const percentLeft = 100 - percent

  return (
    <div className='container-fluid'>
      <div className='row ann py-4' style={{ backgroundColor: percent >= 100 ? '#2c8c69' : '#2981bf' }}>
        <div className='col mx-1 my-auto'>
          {percent >= 100
            ? (
              <>
                <div className='row'>
                  <div className='success'>Monthly donation goal reached! Thank you for the support! 🎉</div>
                </div>
                <div className='row'>
                  <div className='success'>Donation Goal: {currentNumber}$ / {goalNumber}$</div>
                </div>
              </>
              )
            : (
              <>
                <div className='row pb-3'>
                  <div className='col goal'>
                    Donation Goal ({goalText}): {currentNumber}$ / {goalNumber}$
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='progress'>
                      <div className='progress-bar progress-bar-striped progress-bar-animated bg-success' role='progressbar' aria-valuenow={percent} aria-valuemin='0' aria-valuemax='100' style={{ width: `${percent}%` }} />
                      <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' aria-valuenow={percentLeft} aria-valuemin='0' aria-valuemax='100' style={{ width: `${percentLeft}%` }} />
                    </div>
                  </div>
                </div>
              </>
              )}
        </div>
      </div>
    </div>
  )
}

export default App

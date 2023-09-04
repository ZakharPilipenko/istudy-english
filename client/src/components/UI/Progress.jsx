import React from 'react';

const Progress = ({max, value}) => {
    return (
          <>
              <div className="progress-wrapper">
                <div className="progress" style={{width: `${(max - value) / max * 100}%`}}></div>
              </div>
              <p className="progress-description">Открыто {value} / {max}</p>
          </>
            );
          }
      
export default Progress;
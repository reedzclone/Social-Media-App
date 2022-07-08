import React from 'react'
import "./Trends.css";
import { TrendsData } from "../../components/Data/TrendsData"

const Trends = () => {
  return (
    <div className="TrendCard">
        <h3>Trends For You</h3>
        {TrendsData.map((trend) => {
            return (
                <div className="trends">
                    <span className="trendName"><b>#{trend.name}</b></span>
                    <span className="trendShare">{trend.shares}k shares</span>
                </div>
            )
        })}
        
    </div>
  )
}

export default Trends
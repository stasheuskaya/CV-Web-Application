import './portfolio.css';
import PortfolioItem from './portfolio_item';
import { useState } from 'react';

const ALL = 'all'
const UI = 'ui'
const CODE = 'code'

export default function Portfolio(props) {
    const [filter, setFilter] = useState(ALL);
    const clickListener = (value) => () => {
        setFilter(value);
    }

    const linkState = (type) => {
        if (filter === type) {
            return " highlight"
        } else {
            return ""
        }
    }

    return (
        <>
            <div className="portfolioFilter">
                <div className={`filterLinks${linkState(ALL)}`} onClick={clickListener(ALL)}>All /</div>
                <div className={`filterLinks${linkState(UI)}`} onClick={clickListener(UI)}>UI /</div>
                <div className={`filterLinks${linkState(CODE)}`} onClick={clickListener(CODE)}>Code</div>
            </div>
            <div className="scrollPortfolio">
                {props.data
                .filter(item => filter === ALL || item.type === filter)
                .map(item => 
                    <PortfolioItem 
                        type={item.type} 
                        title={item.title}
                        text={item.text}
                        key={item.title}>
                    </PortfolioItem>)}
            </div>
        </>
    )
}


import { Component } from "react";
import './card-list.styles.css';
import CardContainer from '../card-container/card-container.component.jsx';

class CardList extends Component {
    render() {
        console.log('render from CardList');
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => 
                    <CardContainer monster={monster} />
                )}
            </div>
        )
    }
}

export default CardList;


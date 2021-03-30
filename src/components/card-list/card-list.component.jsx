import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => <div className='card-list'>{props.monsters.map(({ name, id, email }) => <Card name={name} key={id} id={id} email={email}/>)}</div>

import React, {useState} from 'react'


const List: React.FC = () => {
  const [listItems, setListItems] = useState([
    {
    id: '1',
    name: 'test1',
    },
    {
    id: '2',
    name: 'test2'
    },
    {
    id: '3',
    name: 'test3'
    }]
  );
  
  return (
    <div>
      {listItems.map(item => {
        return (<h3 key={item.id}>{item.name}</h3>)
     })}
    </div>
  )
}

export default List

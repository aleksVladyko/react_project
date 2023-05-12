export const Education = () => {

    function ListItem(props) {
        return <li>{props.value}</li>;
    }
    function NumberList(props) {
        const numbers = props.numbers;
        return (
            <ul>
                {numbers.map((number) =>
                    <ListItem key={number.toString()}
                        value={number * 3} />
                )} </ul>
        );
    };
    const numbers = [1, 2, 3, 4, 5];

    
    return (
        <div >
           
            <NumberList numbers={numbers} />
        </div>


    );
};
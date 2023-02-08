export const NameAtt = (props) => {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.tablename}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
        </tr>
    );
}
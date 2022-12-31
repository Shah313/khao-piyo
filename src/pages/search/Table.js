


const Table = ({ data }) => {
    return (
      <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}>
        <tbody style={{ backgroundColor: '#ddd'}}>
          <tr>
          <th  style={{ border: '1px solid #ccc', padding: '8px' }}>Image</th>
            <th  style={{ border: '1px solid #ccc', padding: '8px' }}>Food Name</th>
            <th  style={{ border: '1px solid #ccc', padding: '8px' }}>Food Category</th>
            <th  style={{ border: '1px solid #ccc', padding: '8px' }}>Price</th>
            
          </tr>
          {data.map((item) => (
            <tr key={item.id} style={{ border: '1px solid #ccc' }}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><img src={item.food_image}  alt={item.name}   style={{ width: '50%', height: 'auto', margin: '0', marginTop: '10px', marginBottom: '10px' }}   /></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.food_name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.food_category}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
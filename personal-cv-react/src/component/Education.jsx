import Card from "./Card";
function Education({ education }) {

    if (!education) return null;

    return (
        <Card title="Education">
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#7dd3f7' }}> 
                        <th style={{ border: '1px solid #000', padding: '10px', textAlign: 'left' }}>Program</th>
                        <th style={{ border: '1px solid #000', padding: '10px', textAlign: 'left' }}>Institution</th>
                        <th style={{ border: '1px solid #000', padding: '10px', textAlign: 'left' }}>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {education.map((item, index) => (
                        <tr key={index} style={{ backgroundColor: 'white' }}>
                            <td style={{ border: '1px solid #000', padding: '10px' }}>{item.Program}</td>
                            <td style={{ border: '1px solid #000', padding: '10px' }}>{item.Institution}</td>
                            <td style={{ border: '1px solid #000', padding: '10px' }}>{item.Year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default Education;
import Link from 'next/link'


export default function Projects({ children, meta }) {
    return (
        <>    
            {
                meta.map((m) => (
         <table className='blueTable' >
             
            <tbody>
                <tr >
                    <td >Name</td><td >{m.name}</td>   
                </tr>  
                <tr >
                    <td >Period</td><td >{m.period}</td>   
                </tr> 
                <tr >
                    <td >TeamSize</td><td >{m.teamSize}</td>   
                </tr> 
                <tr >
                    <td >Description</td><td >{m.description}</td>   
                </tr> 
                <tr >
                    <td >Technologies</td>
                    <td >
                    {
                    m.technologies.map((t) => (
                        <ul>
                        <li>{t}</li>
                        </ul>))
                    }
                </td>  
                
                </tr>  
                <tr >
                    <td >Roles</td>
                    <td >
                    {
                    m.roles.map((r) => (
                        <ul>
                        <li>{r}</li>
                        </ul>))
                    }
                    </td>  
                </tr> 

                   <tr >
                    <td >Responsibilities</td>
                    <td >
                    {
                    m.responsibilities.map((r) => (
                        <ul>
                        <li>{r}</li>
                        </ul>))
                    }
                    </td>  
                </tr>    
                </tbody>
            </table>
                ))
            }
          
           
          
            
            <style jsx>
                {`
                
        
                    article {
                        margin-bottom: 3rem;
                        background: #044340;
                        padding: 10px;
                        border: 1px groove #ddd;
                        border-radius: 17px;
                        color:#fff;
                    }
                    table.blueTable {
                        border: 1px solid #1C6EA4;
                        background-color: #EEEEEE;
                        width: 100%;
                        text-align: left;
                        border-collapse: collapse;
                        margin-bottom: 50px;
                      }
                      table.blueTable td, table.blueTable th {
                        border: 1px solid #AAAAAA;
                        padding: 5px;
                        background: #065052;
                        border-radius:4px;
                      }
                      table.blueTable tbody td {
                        font-size: 15px;
                        color:#fff;
                      }
                      
                      table.blueTable tr td:nth-child(odd) {
                        
                        width:20%;
                      }
                      table.blueTable tr td:nth-child(even) {
                        background: #ddd;
                        color:#555;
                        width:80%;
                      }
                      
                      table.blueTable thead th:first-child {
                        border-left: none;
                      }
                      
                     
                `}
            </style>
        </>
    )
}


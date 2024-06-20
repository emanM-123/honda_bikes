import React from "react";

export const  Specification = ({ bikeData, tabName }) => {
  console.log(bikeData, tabName);
  const formattedTabName = formatTabName(tabName);
  const selectedCategory = bikeData.find(category => Object.keys(category)[0] === tabName);
  const specifications = selectedCategory ? selectedCategory[tabName] : {};
  
  return (    
    <div className="specification-container">
      <p>{formattedTabName}</p>
      <table className="engine-table">
        <tbody>
          {Object.entries(specifications).map(([key, value]) => (
            <tr key={key}>
              <td className="column-key">{key}</td>
              <td className="column-value">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function formatTabName(tabName) {
  switch (tabName) {
      case 'engine':
          return 'ENGINE';
      case 'dimensions':
          return 'BODY & DIMENSIONS';
      case 'suspension':
          return 'FRAME & SUSPENSION';
      case 'tyresBreaks':
          return 'TYRES & BRAKES';
      case 'transmission':
          return 'TRANSMISSION';
      case 'electricals':
        return 'ELECTRICALS';
      default:
          return tabName.toUpperCase(); 
  }
}









// function CoreConcept(coreValues) { ----same as the code below but with destructuring
//   return (
//     <li>
//       <img src={coreValues.image} alt={coreValues.title} />
//       <h3>{coreValues.title}</h3>
//       <p>{coreValues.description}</p>
//     </li>
//   );
// } 

export default function CoreConcept({ image, title, description }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
const AwardSection = ({ data }) => {
  return (
    <div>
      <h1>Awaaaaaards</h1>
      {data.map((data, i) => (
        <div key={i}>
          <div>
            <span>{data.name}</span>
          </div>
          <div>
            <span>{data.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardSection;

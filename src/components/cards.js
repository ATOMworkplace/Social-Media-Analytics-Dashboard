import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SCard(props){
  const {imgName,imgg, onClick} = props;

    function handleAnalyticsClick(){
      onClick(imgName);
    };

    return (
        <div className="socialcard">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="Isocialcard" src={imgg} />
          <Card.Body>
            <Card.Title className="Ctitle">{imgName}</Card.Title>
            <Button className="Cbutton" onClick={handleAnalyticsClick}>Analyse</Button>
          </Card.Body>
        </Card>
        </div>
    );
};

export default SCard;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';




function Datos() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (

        
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className='body'>
        <h1 className=" text-center">Contacto</h1>
        <p className=" text-center">¡Registrate y obtené 20% OFF!</p>
 <p className=" text-center">Si tu compra supera los $8500 obtenés 25% Off + envío gratis en tu primera compra.*</p>
        <hr />
        
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Usuario</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Usuario"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, elige un usuario.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ciudad" required />
            <Form.Control.Feedback type="invalid">
            Por favor, elige una ciudad.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Provincia" required />
            <Form.Control.Feedback type="invalid">
            Por favor, elige una provincia.
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepto Términos y Condiciones"
            feedback="Primero debe aceptar Términos y Condiciones"
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Enviar</Button>
        </div>
      </Form>
    );
  }


export default Datos;
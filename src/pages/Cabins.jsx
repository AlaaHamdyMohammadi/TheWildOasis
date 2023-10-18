import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function(){
    getCabins().then(res => console.log(res));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <img style={{width: '300px'}} src="https://gpjeipjsboqtxecoiqvo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"></img>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;

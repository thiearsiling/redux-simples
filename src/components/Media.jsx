import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Media = (props) => {
  const { min, max } = props;
  const media = (min + max) / 2;

  return (
    <Card title="Média dos Números">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{media}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Media);

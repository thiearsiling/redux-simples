import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Soma = (props) => {
  const { min, max } = props;
  const soma = min + max;

  return (
    <Card title="Soma dos Números">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{soma}</strong>
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

export default connect(mapStateToProps)(Soma);

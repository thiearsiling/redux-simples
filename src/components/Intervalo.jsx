import React from "react";
import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numerosAction";
import Card from "./Card";

import "./Intervalo.css";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números">
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarNumeroMinimo(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarNumeroMaximo(+e.target.value)}
          />
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

const mapDispatchToProp = (dispatch) => {
  return {
    alterarNumeroMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarNumeroMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);

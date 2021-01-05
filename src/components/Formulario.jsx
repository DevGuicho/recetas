import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, setConsultar } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        setConsultar(true);
      }}
    >
      <fieldset className="text-center mb-4">
        <legend>Busca bebidas por categoria o Independiente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            id=""
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoria --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input type="submit" className="btn btn-block btn-primary" />
        </div>
      </div>
    </form>
  );
};

export default Formulario;

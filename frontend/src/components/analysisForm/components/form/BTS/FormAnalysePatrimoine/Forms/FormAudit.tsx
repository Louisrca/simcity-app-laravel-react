import s from "../../FormAnalyse.module.css";
import { useState } from "react";

export const FormAudit = () => {
  return (
    <div className={s.formSection}>
      <div className={s.title}>
        <h3></h3>
        <div className={s.separator}></div>
      </div>
      <div className={s.formInputsSection}>
        <div className={s.inputContent}>
          <div className={s.selectorForm}>
            <label htmlFor="Type">TYPE</label>
            <select name="type" id={s.typeLabel}>
              <option value="Pylône">Pylône</option>
              <option value="Pylône d'éclairage">Pylône d'éclairage</option>
            </select>
          </div>
          <div className={s.selectorForm}>
            <label htmlFor="Paratonnerre">PARATONNERRE</label>
            <select name="paratonnerre" id={s.paratonnerreLabel}>
              <option value="OUI">OUI</option>
              <option value="NON">NON</option>
              <option value="BLOQUANT">BLOQUANT</option>
            </select>
          </div>
          <div className={s.selectorForm}>
            <label htmlFor="Etude Froudre">ETUDE FOUDRE</label>
            <select name="etude_foudre" id={s.etudefroudreLabel}>
              <option value="OUI">OUI</option>
              <option value="NON">NON</option>
              <option value="BLOQUANT">BLOQUANT</option>{" "}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

import s from "../FormAnalyseOperation.module.css";
import { useState } from "react";

export const FormAudit = () => {
  return (
    <div className={s.formAuditSection}>
      <div className={s.title}>
        <h3>AUDIT</h3>
        <div className={s.separator}></div>
      </div>
      <div className={s.formInputsSection}>
        <div className={s.inputContent}>
          <div className={s.selectorAuditForm}>
            <label htmlFor="Type">
              TYPE <span className={s.asterisk}>*</span>{" "}
            </label>
            <select name="type" id={s.typeLabel}>
              <option value="Pylône">Pylône</option>
              <option value="Pylône d'éclairage">Pylône d'éclairage</option>
            </select>
          </div>
          <div className={s.selectorAuditForm}>
            <label htmlFor="Paratonnerre">
              PARATONNERRE <span className={s.asterisk}>*</span> ⚠️
            </label>
            <select name="paratonnerre" id={s.paratonnerreLabel}>
              <option value="OUI">OUI</option>
              <option value="NON">NON</option>
              <option value="BLOQUANT">BLOQUANT</option>
            </select>
          </div>
          <div className={s.selectorAuditForm}>
            <label htmlFor="Etude Froudre">
              ETUDE FOUDRE <span className={s.asterisk}>*</span> ⚠️
            </label>
            <select name="etude_foudre" id={s.etudefroudreLabel}>
              <option value="OUI">OUI</option>
              <option value="NON">NON</option>
              <option value="BLOQUANT">BLOQUANT</option>{" "}
            </select>
          </div>
          <div className={s.selectorAuditForm}>
            <label htmlFor="SURFACE OCCUPEE">
              SURFACE OCCUPEE (en m²) <span className={s.asterisk}>*</span>
            </label>
            <input
              type="number"
              placeholder="Surface occupée"
              name="surface_occupe"
              id={s.surfaceOccupeLabel}
            />
          </div>
          <div className={s.selectorAuditForm}>
            <label htmlFor="SURFACE OCCUPEE">
              SI PYLONE : FOURNISSEUR <span className={s.asterisk}>*</span>
            </label>
            <select name="etude_foudre" id={s.etudefroudreLabel}>
              <option value="OUI">OUI</option>
              <option value="NON">NON</option>
              <option value="BLOQUANT">BLOQUANT</option>{" "}
            </select>
          </div>
        </div>
      </div>
      <div className={s.submitSection}>
        <div className={s.submitContent}>
          <button>Valider</button>
        </div>
      </div>
    </div>
  );
};

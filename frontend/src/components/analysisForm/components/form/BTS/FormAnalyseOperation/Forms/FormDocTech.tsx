import s from "../FormAnalyseOperation.module.css";
import { useState } from "react";

export const FormDocTech = () => {
  return (
    <div className={s.formAuditSection}>
      <div className={s.title}>
        <h3>DOCUMENTATIONS TECHNIQUES</h3>
        <div className={s.separator}></div>
      </div>
      <div className={s.formInputsSection}>
        <div className={s.inputContent}>
          <div className={s.selectorAuditForm}>
            <label htmlFor="docRacEnergie">
              DOCUMENT RACCORDEMENT ENERGIE{" "}
              <span className={s.asterisk}>*</span>
            </label>
            <select name="doc_rac_energie" id={s.docRacEnergieLabel}>
              <option value="OK">OK</option>
              <option value="NOK">NOK</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <div className={s.selectorAuditForm}>
            <label htmlFor="MESURE TERRE INFERIEUR A 150 Ohms">
              MESURE TERRE INFERIEUR A 150 Ohms{" "}
              <span className={s.asterisk}>*</span>
            </label>
            <select name="mesure_terre" id={s.mesureTerreLabel}>
              <option value="" disabled>
                Séléctionner
              </option>
              <option value="OK">OK</option>
              <option value="N/A">N/A</option>
              <option value="BLOQUANT">BLOQUANT</option>
            </select>
          </div>
          <div className={s.selectorAuditForm}>
            <label
              htmlFor="AUTRE DOCUMENT JUGE INDISPENSABLE POUR L'HISTORIQUE DU SITE
              (général, technique, sécurité)"
            >
              AUTRE DOCUMENT JUGE INDISPENSABLE POUR L'HISTORIQUE DU SITE
              (général, technique, sécurité){" "}
              <span className={s.asterisk}>*</span>
            </label>
            <select name="autre_doc_utile" id={s.autreDocUtileLabel}>
              <option value="OK">OK</option>
              <option value="N/A">NON</option>
              <option value="BLOQUANT">BLOQUANT</option>
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

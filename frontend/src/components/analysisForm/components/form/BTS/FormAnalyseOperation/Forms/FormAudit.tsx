import s from "../../FormAnalyse.module.css";
import { ChangeEvent } from "react";

import { useState } from "react";
import { InputText } from "../../utils/inputText";
import { InputSelector } from "../../utils/inputSelector";

export const FormAudit = () => {
  const [data, setData] = useState([]);

  console.log(data);

  return (
    <div className={s.formSection}>
      <div className={s.title}>
        <h3>AUDIT</h3>
        <div className={s.separator}></div>
      </div>
      <form action="" className={s.formInputsSection}>
        <div className={s.inputContent}>
          <InputSelector
            title="TYPE"
            name="typologie"
            isBloquant={s.notBloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="Pylône">Pylône</option>
            <option value="Pylône d'éclairage">Pylône d'éclairage</option>
          </InputSelector>
          <InputSelector
            title="PARATONNERRE"
            name="paratonnerre"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>
          <InputSelector
            title="ETUDE FOUDRE"
            name="etude_foudre"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>
          <InputText
            title="SURFACE OCCUPEE (en m²)"
            type="number"
            placeholder="Surface occupée"
            name="surface_occupee"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <InputSelector
            title="SI PYLONE : FOURNISSEUR"
            name="pylone_fabriquant"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : GAMME"
            name="pylone_gamme"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : REFERENCE"
            name="pylone_reference"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : ENTRAXE ENTRE PIEDS PYLONE"
            name="section_pied_pylone"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : DEPOINTAGE (en mm)"
            name="pylone_depointage"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : VOILURE (en m²)"
            name="pylone_voilure"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : ID NORME DE CALCUL"
            name="pylone_id_norme_calcul"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : SECTION MEMBRURES (en cm)"
            name="pylone_entraxe"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : TYPE DE SUPPORT"
            name="pylone_type_support"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : SOUS TYPE"
            name="pylone_sous_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="TYPE DE MASSIF"
            name="type_massif"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="TYPE DE SUPPORT"
            name="type_support"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI MAT : TYPE DE FIXATION"
            name="conception"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SYSTEME D'INTERFACAGE"
            name="systeme_interfacage"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="INTEGRATION"
            name="integration"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : TYPE"
            name="si_integration_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : FOURNISSEUR IP"
            name="si_integration_fourniseurs_ip"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : COULEURS"
            name="si_integration_couleurs"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="TYPE D'ANTENNE"
            name="type_antenne"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          >
            <option value="" disabled selected>
              Séléctionner
            </option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputText
            title="HAUTEUR SUPPORT (en mètre)"
            name="hauteur_support"
            type="number"
            placeholder="Hauteur en mètre"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <div className={s.submitSection}>
          <div className={s.submitContent}>
            <button>Valider</button>
          </div>
        </div>
      </form>
    </div>
  );
};

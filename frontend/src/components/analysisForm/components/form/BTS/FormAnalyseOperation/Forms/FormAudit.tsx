import s from "../../FormAnalyse.module.css";
import { useState } from "react";
import { InputText } from "../../utils/inputText";
import { InputSelector } from "../../utils/inputSelector";
import { postFormOP } from "../../../../../../../services/forms/BTS/postFormOP";
import { handleSetFormOPAudit } from "../../../../../../../hooks/handleSetFormOPAudit";
export const FormAudit = () => {
  const URL = window.location.search;
  const urlParams = new URLSearchParams(URL);
  const codeSite = urlParams.get("id");
  const dateCession = urlParams.get("date_cession");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await postFormOP(data);
      setLoading(false);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  const { formOPData } = handleSetFormOPAudit(`${codeSite}`);

  const [data, setData] = useState({
    ["date_cession"]: dateCession,
    ["code_site"]: codeSite,
  });

  console.log(data);

  return (
    <div className={s.formSection}>
      <div className={s.title}>
        <h3>AUDIT</h3>
        <div className={s.separator}></div>
      </div>
      <form action="" onSubmit={handleSubmit} className={s.formInputsSection}>
        <div className={s.inputContent}>
          <InputSelector
            title="TYPE"
            name="typologie"
            isBloquant={s.notBloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.typologie}>
                {formOPData[0]?.typologie}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}

            <option value="Pylône">Pylône</option>
            <option value="Pylône d'éclairage">Pylône d'éclairage</option>
            <option value="Bâtiment">Bâtiment</option>
            <option value="Immeuble">Immeuble</option>
            <option value="Immeuble de bureau">Immeuble de bureau</option>
            <option value="Immeuble industriel">Immeuble industriel</option>
            <option value="Hôtel">Hôtel</option>
            <option value="Hôpital">Hôpital</option>
            <option value="Local technique">Local technique</option>
            <option value="Maison">Maison</option>
            <option value="Centre commercial">Centre commercial</option>
            <option value="Château d'eau ">Château d'eau </option>
            <option value="Eglise">Eglise</option>
            <option value="Phare">Phare</option>
            <option value="Silo">Silo</option>
            <option value="Tour">Tour</option>
            <option value="Autre">Autre</option>
          </InputSelector>
          <InputSelector
            title="PARATONNERRE"
            name="paratonnerre"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.paratonnerre}>
                {formOPData[0]?.paratonnerre}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
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
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.etude_foudre}>
                {formOPData[0]?.etude_foudre}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>
          <InputText
            title="SURFACE OCCUPEE (en m²)"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "Surface Occupée"
            }
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
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_fabriquant}>
                {formOPData[0]?.pylone_fabriquant}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Antenne Leclerc">Antenne Leclerc</option>
            <option value="Aven">Aven</option>
            <option value="Axians">Axians</option>
            <option value="Axians Pylône Service">Axians Pylône Service</option>
            <option value="C3A">C3A</option>
            <option value="Calzavara">Calzavara</option>
            <option value="Celle">Celle</option>
            <option value="CGTI">CGTI</option>
            <option value="Circet Pylône">Circet Pylône</option>
            <option value="COM'US">COM'US</option>
            <option value="ETA">ETA</option>
            <option value="ETH">ETH</option>
            <option value="Famitel">Famitel</option>
            <option value="Inframet">Inframet</option>
            <option value="ITAS">ITAS</option>
            <option value="ITEM">ITEM</option>
            <option value="Kitting Telecom">Kitting Telecom</option>
            <option value="LG COM">LG COM</option>
            <option value="Marine De Limay">Marine De Limay</option>
            <option value="Métalec">Métalec</option>
            <option value="Midi Pyrénées Antennes">
              Midi Pyrénées Antennes
            </option>
            <option value="Retis">Retis</option>
            <option value="Rétis Afélec">Rétis Afélec</option>
            <option value="TSI14">TSI14</option>
            <option value="VOLX">VOLX</option>
            <option value="Autre">Autre</option>
            <option value="NC">NC</option>
          </InputSelector>
          <InputText
            title="SI PYLONE : GAMME"
            type="text"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "GAMME"
            }
            name="pylone_gamme"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputText
            title="SI PYLONE : REFERENCE"
            type="text"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "REFERENCE"
            }
            name="pylone_reference"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputText
            title="SI PYLONE : ENTRAXE ENTRE PIEDS PYLONE (en mètre)"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "en mètre"
            }
            name="section_pied_pylone"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputText
            title="SI PYLONE : DEPOINTAGE (en mm)"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "en mm"
            }
            name="pylone_depointage"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputText
            title="SI PYLONE : VOILURE (en m²)"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "en m²"
            }
            name="pylone_voilure"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputSelector
            title="SI PYLONE : ID NORME DE CALCUL"
            name="pylone_id_norme_calcul"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_id_norme_calcul}>
                {formOPData[0]?.pylone_id_norme_calcul}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Eurocode ">Eurocode </option>
            <option value="Sur plot">NF</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputText
            title="SI PYLONE : SECTION MEMBRURES (en cm)"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "en cm"
            }
            name="pylone_entraxe"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputSelector
            title="SI PYLONE : TYPE DE SUPPORT"
            name="pylone_type_support"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_type_support}>
                {formOPData[0]?.pylone_type_support}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Arbre">Arbre</option>
            <option value="Béton">Béton</option>
            <option value="Cyprès">Cyprès</option>
            <option value="De contrôle">De contrôle</option>
            <option value="Haubané">Haubané</option>
            <option value="Hertizienne">Hertizienne</option>
            <option value="Monotube">Monotube</option>
            <option value="Monotube avec cercle">Monotube avec cercle</option>
            <option value="Monotube radome">Monotube radome</option>
            <option value="Mort">Mort</option>
            <option value="Palmier">Palmier</option>
            <option value="Pylonet">Pylonet</option>
            <option value="Sapin">Sapin</option>
            <option value="Treillis">Treillis</option>
            <option value="Tubulaire">Tubulaire</option>
            <option value="Cocotier">Cocotier</option>
            <option value="Pin">Pin</option>
            <option value="Sequoia">Sequoia</option>
            <option value="Autostable ">Autostable </option>
            <option value="Tour">Tour</option>
            <option value="N/A">N/A</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : SOUS TYPE"
            name="pylone_sous_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_sous_type}>
                {formOPData[0]?.pylone_sous_type}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Treillis Constant">Treillis Constant</option>
            <option value="Treillis Non-Constant">Treillis Non-Constant</option>
            <option value="Monotube Constant">Monotube Constant</option>
            <option value="Monotube Non-Constant">Monotube Non-Constant</option>
            <option value="Autre">Autre</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="TYPE DE MASSIF"
            name="type_massif"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_massif}>
                {formOPData[0]?.type_massif}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Champignon inversé">Champignon inversé</option>
            <option value="Champignon inversé avec micro pieux">
              Champignon inversé avec micro pieux
            </option>
            <option value="Standard">Standard</option>
            <option value="Standard avec micro pieux">
              Standard avec micro pieux
            </option>
            <option value="Hors sol">Hors sol</option>
            <option value="massif de recépage">massif de recépage</option>
            <option value="Autre">autre</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="TYPE DE SUPPORT"
            name="type_support"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_support}>
                {formOPData[0]?.type_support}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Bras de déport">Bras de déport</option>
            <option value="Cerclage">Cerclage</option>
            <option value="Mat coulisant">Mat coulisant</option>
            <option value="Mat fixe">Mat fixe</option>
            <option value="Mat pivotant ">Mat pivotant</option>
            <option value="Mat rabattable">Mat rabattable</option>
            <option value="Mât rabattable + mât en drapeau">
              Mât rabattable + mât en drapeau
            </option>
            <option value="Mât coulissant + mât en drapeau">
              Mât coulissant + mât en drapeau{" "}
            </option>
            <option value="Mât + plot lesté">Mât + plot lesté</option>
            <option value="pylônet">pylônet</option>
            <option value="Sur membrure">Sur membrure</option>
          </InputSelector>

          <InputSelector
            title="SI MAT : TYPE DE FIXATION"
            name="conception"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.conception}>
                {formOPData[0]?.conception}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Acrotère">Acrotère</option>
            <option value="Autostable">Autostable</option>
            <option value="En Drapeau">En Drapeau</option>
            <option value="Plot">Plot</option>
            <option value="Plot béton">Plot béton</option>
            <option value="Plot métallique">Plot métallique</option>
            <option value="Scellé au sol">Scellé au sol</option>
            <option value="Structure métallique ">Structure métallique </option>
            <option value="Sur façade">Sur façade</option>
            <option value="N/A">N/A</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="SYSTEME D'INTERFACAGE"
            name="systeme_interfacage"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.systeme_interfacage}>
                {formOPData[0]?.systeme_interfacage}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="C3A">C3A</option>
            <option value="DEAN">DEAN</option>
            <option value="FAMICEL">FAMICEL</option>
            <option value="GEROREM">GEROREM</option>
            <option value="HUOU">HUOU</option>
            <option value="PALU">PALU</option>
            <option value="N/A">N/A</option>
          </InputSelector>

          <InputSelector
            title="INTEGRATION"
            name="integration"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.integration}>
                {formOPData[0]?.integration}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Arbuste">Arbuste</option>
            <option value="Bardage">Bardage</option>
            <option value="Caisson">Caisson</option>
            <option value="Cylindre">Cylindre</option>
            <option value="Fausse toiture">Fausse toiture</option>
            <option value="Fausses cheminées">Fausses cheminées</option>
            <option value="Feuillage">Feuillage</option>
            <option value="Abats-son">Abats-son</option>
            <option value="Peinture">Peinture</option>
            <option value="Reflecteur ">Reflecteur </option>
            <option value="Autre">Autre</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : TYPE"
            name="si_integration_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_integration_type}>
                {formOPData[0]?.si_integration_type}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Résine">Résine</option>
            <option value="Kit feuillu">Kit feuillu</option>
            <option value="Toile tendue">Toile tendue</option>
            <option value="N/A">N/A</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : FOURNISSEUR IP"
            name="si_integration_fourniseurs_ip"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_integration_fourniseurs_ip}>
                {formOPData[0]?.si_integration_fourniseurs_ip}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Aven">Aven</option>
            <option value="Azur Polyester">Azur Polyester</option>
            <option value="COM'US">COM'US</option>
            <option value="Item">Item</option>
            <option value="Kitting">Kitting</option>
            <option value="Marine de Limay">Marine de Limay</option>
            <option value="Métalec">Métalec</option>
            <option value="SAG Azur">SAG Azur</option>
            <option value="SCA">SCA</option>
            <option value="Volx ">Volx </option>
            <option value="Autres">Autres</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : COULEURS"
            name="si_integration_couleurs"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_integration_couleurs}>
                {formOPData[0]?.si_integration_couleurs}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Beige">Beige</option>
            <option value="Blanc">Blanc</option>
            <option value="Bleu">Bleu</option>
            <option value="Brique">Brique</option>
            <option value="Corail">Corail</option>
            <option value="Gris">Gris</option>
            <option value="Jaune">Jaune</option>
            <option value="Marron">Marron</option>
            <option value="Noir">Noir</option>
            <option value="Orange ">Orange </option>
            <option value="Rose">Rose</option>
            <option value="Rouge">Rouge</option>
            <option value="Taupe">Taupe</option>
            <option value="Vert">Vert</option>
            <option value="Violet">Violet</option>
            <option value="Autres">Autres</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputSelector
            title="TYPE D'ANTENNE"
            name="type_antenne"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_antenne}>
                {formOPData[0]?.type_antenne}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Panneau">Panneau</option>
            <option value="Panneau TOP">Panneau TOP</option>
            <option value="Panneau & Panneau TOP">Panneau & Panneau TOP</option>
            <option value="Panneau & Tube">Panneau & Tube</option>
            <option value="Tube">Tube</option>
            <option value="Tube & Panneau TOP">Tube & Panneau TOP</option>
          </InputSelector>

          <InputText
            title="HAUTEUR SUPPORT (en mètre)"
            name="hauteur_support"
            type="number"
            placeholder={
              formOPData[0]
                ? formOPData[0]?.hauteur_support
                : "Hauteur en mètre"
            }
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputSelector
            title="COEXISTANCE D'AUTRES OPERATEURS SUR BATI"
            name="colocalisation"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.colocalisation}>
                {formOPData[0]?.colocalisation}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Aucune">Aucune</option>
            <option value="BYTEL">BYTEL</option>
            <option value="BYTEL, ORANGE">BYTEL, ORANGE</option>
            <option value="BYTEL, SFR">BYTEL, SFR</option>
            <option value="BYTEL,ORANGE, SFR">BYTEL,ORANGE, SFR</option>
            <option value="ORANGE">ORANGE</option>
            <option value="ORANGE, SFR">ORANGE, SFR</option>
            <option value="SFR">SFR</option>
            <option value="Autre">Autre</option>
          </InputSelector>
          <InputSelector
            title="COLOCALISATION OPERATEUR TIERS SUR SITE"
            name="colocalisation_operateur_tiers"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.colocalisation_operateur_tiers}>
                {formOPData[0]?.colocalisation_operateur_tiers}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Aucune">Aucune</option>
            <option value="BYTEL">BYTEL</option>
            <option value="BYTEL, ORANGE">BYTEL, ORANGE</option>
            <option value="BYTEL, SFR">BYTEL, SFR</option>
            <option value="BYTEL,ORANGE, SFR">BYTEL,ORANGE, SFR</option>
            <option value="ORANGE">ORANGE</option>
            <option value="ORANGE, SFR">ORANGE, SFR</option>
            <option value="SFR">SFR</option>
            <option value="Autre">Autre</option>
          </InputSelector>
          <InputSelector
            title="COMPLEXITE DU SITE"
            name="complexite_site"
            isBloquant={s.notBloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.complexite_site}>
                {formOPData[0]?.complexite_site}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Simple">Simple</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Haute">Haute</option>
          </InputSelector>
          <InputSelector
            title="TYPE ZONE TECHNIQUE"
            name="type_zone_technique"
            isBloquant={s.notBloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_antype_zone_techniqueenne}>
                {formOPData[0]?.type_zone_technique}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Indoor">Indoor</option>
            <option value="Outdoor ">Outdoor </option>
            <option value="Indoor + outdoor">Indoor + outdoor </option>
          </InputSelector>

          <InputSelector
            title="SI ZT INDOOR : SOUS-TYPE INDOOR"
            name="type_indoor"
            isBloquant={s.notBloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_indoor}>
                {formOPData[0]?.type_indoor}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Shelter">Shelter</option>
            <option value="Local">Local</option>
            <option value="Comble">Comble</option>
            <option value="N/A">N/A</option>
            <option value="NC">NC</option>
          </InputSelector>

          <InputText
            title="SURFACE OCCUPEE INDOOR (en m2) (0 si non applicable)"
            name="surface_occupee_indoor"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee_indoor : "en m2"
            }
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />

          <InputSelector
            title="TYPE DE REFROIDISSEMENT"
            name="type_refroidissement"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_refroidissement}>
                {formOPData[0]?.type_refroidissement}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Climatisation">Climatisation</option>
            <option value="Ventilateur">Ventilateur</option>
            <option value="Extraction">Extraction</option>
            <option value="Ventilation naturelle">Ventilation naturelle</option>
            <option value="N/A">N/A</option>
            <option value="N/C">N/C</option>
          </InputSelector>

          <InputSelector
            title="SI ZT OUTDOOR : TYPE DE CLOTURE"
            name="zt_outdoor_type_cloture"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.zt_outdoor_type_cloture}>
                {formOPData[0]?.zt_outdoor_type_cloture}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Absence de clôture">Absence de clôture</option>
            <option value="Bardage en bois">Bardage en bois</option>
            <option value="Cloture grillagée">Cloture grillagée</option>
            <option value="Métallique">Métallique</option>
            <option value="NC">NC</option>
          </InputSelector>
          <InputSelector
            title="SI CLOTURE : L'ENSEMBLE DE LA SURFACE LOUEE EST SECURISEE PAR UN PORTAIL"
            name="si_cloture_securite_portail"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_cloture_securite_portail}>
                {formOPData[0]?.si_cloture_securite_portail}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="N/A">N/A</option>
            <option value="NC">NC</option>
          </InputSelector>
          <InputSelector
            title="FLUIDES : DISTANCE ENTRE SITE ET PDL (en ml)"
            name="fluides_distance"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.fluides_distance}>
                {formOPData[0]?.fluides_distance}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="1 à 10">1 à 10</option>
            <option value="10 à 50">10 à 50</option>
            <option value="50 à 100">50 à 100</option>
            <option value="100 à 150">100 à 150</option>
            <option value="150 à 200">150 à 200</option>
            <option value="200 à 250">200 à 250</option>
            <option value="> 250">{">250"}</option>
          </InputSelector>
          <InputSelector
            title="FLUIDES : TYPE ADDUCTION"
            name="fluides_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.fluides_type}>
                {formOPData[0]?.fluides_type}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="GC">GC</option>
            <option value="Gaine technique">Gaine technique</option>
            <option value="Mixte">Mixte</option>
          </InputSelector>
          <InputSelector
            title="FLUIDES : DETAIL ADDUCTION"
            name="fluides_detail"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.fluides_detail}>
                {formOPData[0]?.fluides_detail}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="GC Enrobé">GC Enrobé</option>
            <option value="GC Enrobé + 2 à 5 étages">
              GC Enrobé + 2 à 5 étages
            </option>
            <option value="GC Enrobé + 5 à 10 étages ">
              GC Enrobé + 5 à 10 étages{" "}
            </option>
            <option value="GC Enrobé + 10 à 15 étages">
              GC Enrobé + 10 à 15 étages
            </option>
            <option value="GC Enrobé + > 15 étages">
              {"GC Enrobé + > 15 étages"}
            </option>
            <option value="GC Terre naturelle">GC Terre naturelle</option>
            <option value="GC Terre naturelle + 2 à 5 étages">
              GC Terre naturelle + 2 à 5 étages
            </option>
            <option value="GC Terre naturelle + 5 à 10 étages ">
              GC Terre naturelle + 5 à 10 étages{" "}
            </option>
            <option value="GC Terre naturelle + 10 à 15 étages">
              GC Terre naturelle + 10 à 15 étages
            </option>
            <option value="GC Terre naturelle  > 15 étages">
              {"GC Terre naturelle + > 15 étages"}
            </option>
            <option value="GC Mixte">GC Mixte</option>
            <option value="GC Mixte + 2 à 5 étages">
              GC Mixte + 2 à 5 étages
            </option>
            <option value="GC Mixte + 5 à 10 étages">
              GC Mixte + 5 à 10 étages
            </option>
            <option value="GC Mixte + > 15 étages">
              {"GC Mixte + > 15 étages"}
            </option>
            <option value="GC Mixte + > 15 étages">
              {"GC Mixte + > 15 étages"}
            </option>
            <option value="2 à 5 étages">2 à 5 étages</option>
            <option value="5 à 10 étages">5 à 10 étages</option>
            <option value="10 à 15 étages">10 à 15 étages</option>
            <option value="> 15 étages">{"> 15 étages"}</option>
          </InputSelector>
          <InputSelector
            title="FLUIDES : SI GC, METRE APPROXIMATIF (en ml)"
            name="fluides_si_gc"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.fluides_si_gc}>
                {formOPData[0]?.fluides_si_gc}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="1 à 10">1 à 10</option>
            <option value="10 à 50">10 à 50</option>
            <option value="50 à 100">50 à 100</option>
            <option value="100 à 150">100 à 150</option>
            <option value="150 à 200">150 à 200</option>
            <option value="200 à 250">200 à 250</option>
            <option value="> 250">{"> 250"}</option>
            <option value="N/A">N/A</option>
          </InputSelector>
          <InputSelector
            title="TYPE DE RACCORDEMENT"
            name="type_raccordement"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_raccordement}>
                {formOPData[0]?.type_raccordement}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="Coffret de chantier ">Coffret de chantier </option>
            <option value="Eolien">Eolien</option>
            <option value="Générateur">Générateur</option>
            <option value="Logette_Regie">Logette_Regie</option>
            <option value="Logette-Enedis">Logette-Enedis</option>
            <option value="Solaire">Solaire</option>
            <option value="Sous-comptage">Sous-comptage</option>
          </InputSelector>
        </div>

        <div className={s.submitSection}>
          <div className={s.submitContent}>
            <button>
              {loading ? (
                <div className={s.loader}>
                  {/* <div className={s.circle}></div> */}
                </div>
              ) : (
                <div>Valider</div>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

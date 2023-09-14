import { ChartCardLayout } from "../layout/chartCard/ChartCardLayout";
import { handleSetBTSChart } from "../../hooks/handleSetBTSChart";
import s from "./ChartCard.module.css";
export const ChartCard = () => {
  const { btsChartData } = handleSetBTSChart();
  return (
    <>
      <div className={s.chartCards}>
        <ChartCardLayout>
          <div className={s.chartCard}>
            <div className={s.chartCardTitle}>
              <span>Annexe 2 avec Réserves</span>{" "}
            </div>
            <div className={s.chartCardContent}>
              <span>{btsChartData && btsChartData.countArbitrageAnnexe2}</span>
            </div>
          </div>
        </ChartCardLayout>
        <ChartCardLayout>
          <div className={s.chartCard}>
            <div className={s.chartCardTitle}>
              <span>Standby</span>{" "}
            </div>
            <div className={s.chartCardContent}>
              <span>{btsChartData && btsChartData.countArbitrageStandby}</span>
            </div>
          </div>
        </ChartCardLayout>

        <ChartCardLayout>
          <div className={s.chartCard}>
            <div className={s.chartCardTitle}>
              <span>Analyses en Terminées</span>{" "}
            </div>
            <div className={s.chartCardSubSection}>
              <div className={s.chartCardContent}>
                <p>OK Cession</p>
                <span>
                  {btsChartData && btsChartData.countArbitrageAnnexeOkCession}
                </span>
              </div>
              <div className={s.chartCardContent}>
                <p>L.D.R</p>
                <span>{btsChartData && btsChartData.countArbitrageLDR}</span>
              </div>
            </div>
          </div>
        </ChartCardLayout>

        <ChartCardLayout>
          <div className={s.chartCard}>
            <div className={s.chartCardTitle}>
              <span>Analyses en cours</span>{" "}
            </div>
            <div className={s.chartCardSubSection}>
              <div className={s.chartCardContent}>
                <p>En cours</p>
                <span>{btsChartData && btsChartData.countEtatEnCours}</span>
              </div>
              <div className={s.chartCardContent}>
                <p>Terminées</p>
                <span>{btsChartData && btsChartData.countEtatTermine}</span>
              </div>
            </div>
          </div>
        </ChartCardLayout>
      </div>
    </>
  );
};

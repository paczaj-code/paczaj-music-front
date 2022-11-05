import React from 'react';
import Divider from '../../../../components/UI/Divider/Divider';
import Panel from '../../../UI/Panel/Panel';

interface InfoPanelTypes {
  country_code: string | undefined;
  country: string | undefined;
  begin_date_year?: number | undefined;
  end_date_year?: number | undefined;
  tags?: string[] | [] | undefined;
}

const InfoPanel: React.FC<InfoPanelTypes> = ({
  country_code,
  country,
  begin_date_year,
  end_date_year,
  tags,
}) => {
  return (
    <Panel extra_class="info">
      {/* <Divider classes="panel" /> */}

      <div className="panel__info__item">
        <p className="panel__info__title">
          <i className="icon-earth"></i>Kraj:
        </p>
        <p className="panel__info__item__country">
          <img
            className="panel__info__item__flag"
            src={`https://www.countryflagicons.com/SHINY/32/${country_code!.trim()}.png`}
            alt={country_code}
            height={30}
          />
          {country}
        </p>
      </div>
      <Divider classes="panel" />
      <div className="panel__info__item">
        <p className="panel__info__title">
          <i className="icon-calendar"></i>Lata aktywności:
        </p>
        <p className="panel__info__item__dates">
          {begin_date_year} - {end_date_year ? end_date_year : 'present'}
        </p>
      </div>
      <Divider classes="panel" />
      <div className="panel__info__item">
        <p className="panel__info__title">
          <i className="icon-price-tags"></i>Gatunki:
        </p>
        <div className="panel__info__item_tags">
          {tags &&
            tags.slice(0, 4).map((tag: string, index: number) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </Panel>
  );
};

export default InfoPanel;

//TODO refactor i testy

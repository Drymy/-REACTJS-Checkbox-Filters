import { useState } from 'react';
import React from 'react';
import './App.css';
import Modal from 'react-modal';
import Checkboxes from './components/Checkboxes/checkboxes';
import { trainersData } from './data/trainers';
import { listCheckboxesType } from './data/types';
import { listCheckboxesRole } from './data/roles';
import { listCheckboxesRegion } from './data/regions';
import { listCheckboxesRarity } from './data/rarities';
import { listCheckboxesExtra } from './data/extras';
import { listCheckboxesBuff } from './data/buffs';
import { listCheckboxesDebuff } from './data/debuffs';

Modal.setAppElement('#root');

const App = () => {
  const [trainers, setTrainers] = useState(trainersData);
  const [selected, setSelected] = useState({
    type: [],
    role: [],
    region: [],
    rarity: [],
    extra: [],
    buff: [],
    debuff: [],
  });

  /**
   * This function will perform the filtration process based on the key value.
   *
   * @param {number[]} checkboxState - It will take the final state of checkboxes
   * @param {string} key - It will help us to determine the type of filtration
   */
  const handleFilters = (checkboxState, key) => {
    const logic = 'AND';
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;

    const hasTypes = newFilters.type.length > 0;
    const hasRoles = newFilters.role.length > 0;
    const hasRegions = newFilters.region.length > 0;
    const hasRarities = newFilters.rarity.length > 0;
    const hasExtras = newFilters.extra.length > 0;
    const hasBuffs = newFilters.buff.length > 0;
    const hasDebuffs = newFilters.debuff.length > 0;
    const hasFilters = hasTypes || hasRoles || hasRegions || hasRarities || hasExtras || hasBuffs || hasDebuffs
    const filterType = (module) =>
      newFilters.type.includes('') ||
      newFilters.type.some((item) => module.type.includes(item));
    const filterRole = (module) =>
      newFilters.role.includes('') ||
      newFilters.role.some((item) => module.role.includes(item));
    const filterRegion = (module) =>
      newFilters.region.includes('') ||
      newFilters.region.includes(module.region);
    const filterRarity = (module) =>
      newFilters.rarity.includes('') ||
      newFilters.rarity.includes(module.rarity);
    const filterExtra = (module) =>
      newFilters.extra.includes('') ||
      newFilters.extra.some((item) => module.extra.includes(item));
    const filterBuff = (module) =>
      newFilters.buff.includes('') ||
      newFilters.buff.some((item) => module.buff.includes(item));
    const filterDebuff = (module) =>
      newFilters.debuff.includes('') ||
      newFilters.debuff.some((item) => module.debuff.includes(item));
    

    console.log(checkboxState);

    const filteredTrainers = trainersData.filter(
      logic === 'OR'
        ? (m) => !hasFilters || filterType(m) || filterRole(m) || filterRegion(m) || filterRarity(m) || filterExtra(m) || filterBuff(m) || filterDebuff(m)
        : (m) =>
          !hasFilters ||
          ((!hasTypes || filterType(m)) && (!hasRoles || filterRole(m)) && (!hasRegions || filterRegion(m)) && (!hasRarities || filterRarity(m)) && (!hasExtras || filterExtra(m)) && (!hasBuffs || filterBuff(m)) && (!hasDebuffs || filterDebuff(m)))
    );
    setTrainers(filteredTrainers);
    setSelected(newFilters);
  };

 
  return (
    <div className="container">
          <div className="row">
            <div className="col type">
              <h3>Filter by Type</h3>
              <Checkboxes
                list={listCheckboxesType}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'type')
                }
              />
            </div>

            <div className="col role">
              <h3>Filter by Role</h3>
              <Checkboxes
                list={listCheckboxesRole}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'role')
                }
              />
            </div>

            <div className="col region">
              <h3>Filter by Region</h3>
              <Checkboxes
                list={listCheckboxesRegion}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'region')
                }
              />
            </div>

            <div className="col rarity">
              <h3>Filter by Rarity</h3>
              <Checkboxes
                list={listCheckboxesRarity}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'rarity')
                }
              />
            </div>

            <div className="col extra">
              <h3>Filter by Extras</h3>
              <Checkboxes
                list={listCheckboxesExtra}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'extra')
                }
              />
            </div>

            <div className="col buff">
              <h3>Filter by Buffs</h3>
              <Checkboxes
                list={listCheckboxesBuff}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'buff')
                }
              />
            </div>

            <div className="col debuff">
              <h3>Filter by Debuffs</h3>
              <Checkboxes
                list={listCheckboxesDebuff}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'debuff')
                }
              />
            </div>
          </div>

      <div className="list">
        {trainers.map((trainer) => (

          <div className="trainerBox" key={trainer.id}>
            <div className="trainerIcon"><img src={trainer.icon} alt="trainericon" /></div>
            <h4> {trainer.name} </h4>
            <h5> {trainer.pokemon} </h5>
          </div>

        ))}
      </div>
    </div>
  );
};

export default App;

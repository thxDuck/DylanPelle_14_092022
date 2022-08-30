import data from "../data/data.js"
import models from "../data/models.js"

export const getFormInformations = () => {
    return {
        informations: models.personnalInformations,
        address: models.address,
        department: models.buisnessInformations
    }
}

export const getOptionsForSelect = (id) => {
    console.log('\n');
    console.log({ id });
  const raw_options = data.options[id];
  if (!raw_options) return false;
  const options = raw_options.map((item) => ({ value: item.name, label: item.name }));
  return options
}
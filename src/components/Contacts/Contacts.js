import styles from "./Contacts.module.css";
import { useState } from "react";
import { Contact } from "../Contact/Contact";

export const Contacts = ({ contacts }) => {
  const [stateContacts, setContacts] = useState(contacts);
  const [stateSearch, setSearch] = useState("");
  const [stateCheckboxes, setCheckboxes] = useState({
    female: true,
    male: true,
    unknown: true,
  });

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);
    const filteredContacts = getFilteredContacts(searchTerm, stateCheckboxes);
    setContacts(filteredContacts);
  };

  const handleCheckboxes = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));

    const filteredContacts = getFilteredContacts(stateSearch, {
      ...stateCheckboxes,
      [checkboxName]: isChecked,
    });
    setContacts(filteredContacts);
  };

  const getFilteredContacts = (searchStr, checkboxes) => {
    return contacts.filter((contact) => {
      const fullName = (contact.firstName || "") + " " + (contact.lastName || "");
      const contactMatchesSearch = fullName.toLowerCase().includes(searchStr);
      const contactMatchesGender = checkboxes[contact.gender];

      return contactMatchesSearch && contactMatchesGender;
    });
  };

  return (
      <div className={styles.contacts_container}>
      <input
        className={styles.search}
        type="search"
        value={stateSearch}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
          <div className={styles.gender}>
        <label>
          female {" "}
          <input
            type="checkbox"
            name="female"
            checked={stateCheckboxes.female}
            onChange={handleCheckboxes}
          />
        </label>
        <label>
          male {" "}
          <input
            type="checkbox"
            name="male"
            checked={stateCheckboxes.male}
            onChange={handleCheckboxes}
          />
        </label>
        <label>
          unknown {" "}
          <input
            type="checkbox"
            name="unknown"
            checked={stateCheckboxes.unknown}
            onChange={handleCheckboxes}
          />
        </label>
      </div>
          <div className={styles.contactsList}>
        {stateContacts.map((item) => (
          <Contact key={item.id} contact={item} />
        ))}
      </div>
    </div>
  );
};


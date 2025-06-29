"use client";
import ActionButtons from "@/Components/adminComponents/ActionButtons";
import React, { useEffect, useState } from "react";

function Page() {
  const [skills, setSkills] = useState({ languages: [], technologies: [], others: [] });

  const [languagesMode, setLanguagesMode] = useState("default");
  const [technologiesMode, setTechnologiesMode] = useState("default");
  const [othersMode, setOthersMode] = useState("default");

  const [newLang, setNewLang] = useState({ title: "", percent: "" });
  const [newTech, setNewTech] = useState({ title: "", percent: "" });
  const [newOther, setNewOther] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/skills");
        const data = await response.json();
        setSkills(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const updateSkills = async (updated) => {
    try {
      const response = await fetch("/api/skills", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!response.ok) throw new Error("Failed to update skills");
      setSkills(updated);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // Languages
  const handleLangSave = () => {
    const updated = { ...skills, languages: [...skills.languages, newLang] };
    updateSkills(updated);
    setNewLang({ title: "", percent: "" });
    setLanguagesMode("default");
  };
  const handleLangUpdate = () => {
    updateSkills(skills);
    setLanguagesMode("default");
  };

  // Technologies
  const handleTechSave = () => {
    const updated = { ...skills, technologies: [...skills.technologies, newTech] };
    updateSkills(updated);
    setNewTech({ title: "", percent: "" });
    setTechnologiesMode("default");
  };
  const handleTechUpdate = () => {
    updateSkills(skills);
    setTechnologiesMode("default");
  };

  // Others
  const handleOtherSave = () => {
    const updated = { ...skills, others: [...skills.others, newOther] };
    updateSkills(updated);
    setNewOther("");
    setOthersMode("default");
  };
  const handleOtherUpdate = () => {
    updateSkills(skills);
    setOthersMode("default");
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-7">
        <div className="grid gap-7">
          {/* Languages */}
          <div className="py-5 px-10 rounded flex flex-col justify-center gradientBg relative">
            <ActionButtons
              mode={languagesMode}
              onSave={handleLangSave}
              onCancel={() => setLanguagesMode("default")}
              onAdd={() => setLanguagesMode("add")}
              onEdit={() => setLanguagesMode("edit")}
              onUpdate={handleLangUpdate}
            />
            {languagesMode === "add" && (
              <div className="mb-3 flex gap-3">
                <input
                  value={newLang.title}
                  onChange={(e) => setNewLang({ ...newLang, title: e.target.value })}
                  placeholder="Language"
                  className="input"
                />
                <input
                  value={newLang.percent}
                  onChange={(e) => setNewLang({ ...newLang, percent: e.target.value })}
                  placeholder="Percent"
                  className="input"
                />
              </div>
            )}
            {skills.languages.map((lang, index) => (
              <li className="flex justify-between" key={index}>
                {languagesMode === "edit" ? (
                  <>
                    <input
                      value={lang.title}
                      onChange={(e) => {
                        const updated = [...skills.languages];
                        updated[index].title = e.target.value;
                        setSkills({ ...skills, languages: updated });
                      }}
                      className="input"
                    />
                    <input
                      value={lang.percent}
                      onChange={(e) => {
                        const updated = [...skills.languages];
                        updated[index].percent = e.target.value;
                        setSkills({ ...skills, languages: updated });
                      }}
                      className="input"
                    />
                  </>
                ) : (
                  <>
                    {lang.title}: <span className="subTitleText">{lang.percent}</span>
                  </>
                )}
              </li>
            ))}
          </div>

          {/* Technologies */}
          <div className="py-5 px-10 rounded flex flex-col justify-center gradientBg relative">
            <ActionButtons
              mode={technologiesMode}
              onSave={handleTechSave}
              onCancel={() => setTechnologiesMode("default")}
              onAdd={() => setTechnologiesMode("add")}
              onEdit={() => setTechnologiesMode("edit")}
              onUpdate={handleTechUpdate}
            />
            {technologiesMode === "add" && (
              <div className="mb-3 flex gap-3">
                <input
                  value={newTech.title}
                  onChange={(e) => setNewTech({ ...newTech, title: e.target.value })}
                  placeholder="Technology"
                  className="input"
                />
                <input
                  value={newTech.percent}
                  onChange={(e) => setNewTech({ ...newTech, percent: e.target.value })}
                  placeholder="Percent"
                  className="input"
                />
              </div>
            )}
            {skills.technologies.map((tech, index) => (
              <li className="flex justify-between" key={index}>
                {technologiesMode === "edit" ? (
                  <>
                    <input
                      value={tech.title}
                      onChange={(e) => {
                        const updated = [...skills.technologies];
                        updated[index].title = e.target.value;
                        setSkills({ ...skills, technologies: updated });
                      }}
                      className="input"
                    />
                    <input
                      value={tech.percent}
                      onChange={(e) => {
                        const updated = [...skills.technologies];
                        updated[index].percent = e.target.value;
                        setSkills({ ...skills, technologies: updated });
                      }}
                      className="input"
                    />
                  </>
                ) : (
                  <>
                    {tech.title}: <span className="subTitleText">{tech.percent}</span>
                  </>
                )}
              </li>
            ))}
          </div>
        </div>

        {/* Others */}
        <div className="grid">
          <div className="py-5 px-10 rounded flex flex-col gradientBg relative">
            <ActionButtons
              mode={othersMode}
              onSave={handleOtherSave}
              onCancel={() => setOthersMode("default")}
              onAdd={() => setOthersMode("add")}
              onEdit={() => setOthersMode("edit")}
              onUpdate={handleOtherUpdate}
            />
            {othersMode === "add" && (
              <input
                value={newOther}
                onChange={(e) => setNewOther(e.target.value)}
                placeholder="New Skill"
                className="input mb-3"
              />
            )}
            {skills.others.map((other, index) => (
              <li className="flex justify-between" key={index}>
                {othersMode === "edit" ? (
                  <input
                    value={other}
                    onChange={(e) => {
                      const updated = [...skills.others];
                      updated[index] = e.target.value;
                      setSkills({ ...skills, others: updated });
                    }}
                    className="input"
                  />
                ) : (
                  <>{other}</>
                )}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

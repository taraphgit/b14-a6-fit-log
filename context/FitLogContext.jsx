/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedWorkouts = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        setPlan(JSON.parse(savedPlan));
      }

      if (savedWorkouts) {
        setSaved(JSON.parse(savedWorkouts));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [plan, saved, hydrated]);

  const addToPlan = (workout) => {
    const alreadyAdded = plan.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (alreadyAdded) {
      toast("Already in today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 lifts.");
      return;
    }

    setPlan((current) => [
      ...current,
      {
        ...workout,
        done: false,
      },
    ]);

    toast.success("Added to today's plan");
  };

  const saveWorkout = (workout) => {
    const alreadySaved = saved.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (alreadySaved) {
      toast("Already saved.");
      return;
    }

    setSaved((current) => [...current, workout]);
    toast.success("Workout saved for later");
  };

  const removeFromPlan = (id) => {
    setPlan((current) =>
      current.filter((item) => String(item.id) !== String(id))
    );

    toast.success("Workout removed");
  };

  const removeFromSaved = (id) => {
    setSaved((current) =>
      current.filter((item) => String(item.id) !== String(id))
    );

    toast.success("Workout removed from saved");
  };

  const markAsDone = (id) => {
    setPlan((current) =>
      current.map((item) =>
        String(item.id) === String(id)
          ? { ...item, done: true }
          : item
      )
    );

    toast.success("Workout marked as done");
  };

  const isInPlan = (id) =>
    plan.some((item) => String(item.id) === String(id));

  const isSaved = (id) =>
    saved.some((item) => String(item.id) === String(id));

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        hydrated,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
          success: {
            iconTheme: {
              primary: "#ccff00",
              secondary: "#090909",
            },
          },
        }}
      />
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}
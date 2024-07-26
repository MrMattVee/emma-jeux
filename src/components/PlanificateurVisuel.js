import React, { useState, useCallback } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// ... (keep the existing code for colors and ScheduleItem)

const PlanificateurVisuel = () => {
  const [editMode, setEditMode] = useState(false);
  const [tasks, setTasks] = useState([
    // ... (keep the existing tasks)
  ]);

  const [reminders, setReminders] = useState([
    // ... (keep the existing reminders)
  ]);

  const toggleTask = useCallback((index, isReminder) => {
    const updateList = isReminder ? setReminders : setTasks;
    updateList(prevList => prevList.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    ));
  }, []);

  const changeTaskTime = useCallback((index, newTime, isReminder) => {
    const updateList = isReminder ? setReminders : setTasks;
    updateList(prevList => prevList.map((item, i) => 
      i === index ? { ...item, time: newTime } : item
    ));
  }, []);

  // ... (keep the rest of the component code)
};

export default PlanificateurVisuel;

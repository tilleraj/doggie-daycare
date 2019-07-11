const walksWithNames = (walks, dogs, employees) => walks.map((walk) => {
  const newWalk = walk;
  const dogMatch = dogs.find(dog => dog.id === newWalk.dogId);
  if (dogMatch) {
    newWalk.dogName = dogMatch.name;
  }
  const employeeMatch = employees.find(employee => employee.id === newWalk.employeeId);
  if (employeeMatch) {
    newWalk.employeeName = employeeMatch.name;
  }

  return newWalk;
});

export default { walksWithNames };

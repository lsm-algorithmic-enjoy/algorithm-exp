function solution(n, lost, reserve) {
  let lost_student = lost.filter(v => !reserve.includes(v)).sort();
  let reserve_student = reserve.filter(v => !lost.includes(v)).sort();

  for (let i = 0; i < reserve_student.length; i++) {
    if (lost_student.includes(reserve_student[i] - 1)) {
      lost_student = lost_student.filter(v => v !== reserve_student[i] - 1);
    } else if (lost_student.includes(reserve_student[i] + 1)) {
      lost_student = lost_student.filter(v => v !== reserve_student[i] + 1);
    }
  }

  return n - lost_student.length;
}
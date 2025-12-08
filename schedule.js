 const schedule = [
      {
        name: "Thứ 2 – Ngực + Tay sau (Chest – Triceps)",
        open: false,
        day: 2 , 
        exercises: [
          { name: "Bench Press", sets: "3-4 sets x 10-12 reps", gif: "imgs/SPOTO_BP.gif" },
          { name: "Incline Dumbbell Press", sets: "3-4 sets x 10-12 reps", gif: "imgs/DB_INC_BP.gif" },
          { name: "Chest Fly", sets: "3 sets x 12-15 reps", gif: "imgs/PEC_DECK_MC.gif" },
          { name: "Standing Cable Fly", sets: "3 sets x 12-15 reps", gif: "imgs/STD_CABLE_FLY.gif" },
          { name: "Triceps Pushdown", sets: "3 sets x 12-15 reps", gif: "imgs/CABLE_PUSH_DOWN.gif" },
          { name: "Overhead Triceps Extension", sets: "3 sets x 12-15 reps", gif: "imgs/DB_TRI_EXT.gif" }
        ]
      },
      {
        name: "Thứ 3 – Lưng + Tay trước (Back – Biceps)",
        open: false,
        day: 3, 
        exercises: [
          { name: "Lat Pulldown", sets: "3-4 sets x 10-12 reps", gif: "imgs/LAT_PULL_DOWN.gif" },
          { name: "Seated Row", sets: "3 sets x 10-12 reps", gif: "imgs/SEATED_CABLE_ROW.gif" },
          { name: "Single-arm Dumbbell Row", sets: "3 sets x 10-12 reps", gif: "imgs/OA_DB_ROW.gif" },
          { name: "Barbell Curl", sets: "3 sets x 12-15 reps", gif: "imgs/BB_PREA_CURL.gif" },
          { name: "Hammer Curl", sets: "3 sets x 12-15 reps", gif: "imgs/CABLE_HAM_CURL.gif" },
              { name: "High Row Machine", sets: "3 sets x 12-15 reps", gif: "imgs/HIGH_ROW_MC.gif" }
        ]
      },
      {
        name: "Thứ 4 – Chân (Legs)",
        open: false,
        day: 4, 
        exercises: [
          { name: "Squat", sets: "3-4 sets x 10-12 reps", gif: "imgs/BB_BSQT.gif" },
          { name: "Leg Press", sets: "3 sets x 10-12 reps", gif: "imgs/LEG_PRESS.gif" },
          { name: "Romanian Deadlift", sets: "3 sets x 10-12 reps", gif: "imgs/RM_BB_DL.gif" },
          { name: "Lunges", sets: "3 sets x 12-15 reps mỗi chân", gif: "imgs/DB_LUNGE.gif" },
          { name: "Leg Extension", sets: "3 sets x 12-15 reps", gif: "imgs/LGE_EXT.gif" },
          { name: "Leg Curl", sets: "3 sets x 12-15 reps", gif: "imgs/LEG_CURL.gif" }
        ]
      },
      {
        name: "Thứ 5 – Vai + Core (Shoulders + Core)",
        open: false,
        day: 5, 
        exercises: [
          { name: "Overhead Press", sets: "3-4 sets x 10-12 reps", gif: "imgs/BB_PRESS.gif" },
          { name: "Lateral Raise", sets: "3 sets x 12-15 reps", gif: "imgs/DB_LAT_RAISE.gif" },
          { name: "Front Raise", sets: "3 sets x 12-15 reps", gif: "imgs/DB_F_RAISE.gif" },
          { name: "Rear-delt Fly", sets: "3 sets x 12-15 reps", gif: "imgs/REV_PEC_DECK_MC.gif" },
          { name: "Plank", sets: "3 sets x 30-60 giây", gif: "imgs/PLANK.gif" },
          { name: "Cable Woodchop", sets: "3 sets x 30-60 giây", gif: "imgs/CABLE_TWIST.gif" },
          
            
        ]
      },
      {
        name: "Thứ 6 – Full Body (tổng hợp)",
        open: false,
        day: 6, 
        exercises: [
          { name: "Deadlift hoặc Squat", sets: "3-4 sets x 8-10 reps", gif: "imgs/RM_BB_DL.gif" },
          { name: "Bench Press", sets: "3 sets x 10-12 reps", gif: "imgs/SPOTO_BP.gif" },
          { name: "Row", sets: "3 sets x 10-12 reps", gif: "imgs/MC_LOW.gif" },
          { name: "High Row Machine", sets: "3 sets x 12-15 reps", gif: "imgs/HIGH_ROW_MC.gif" }
        ]
      },
      {
        name: "Thứ 7 & Chủ nhật – Core",
        open: false,
        day: 7, 
        exercises: [
            { name: "Dumbbell Side Bend", sets: "3 sets x 30-60 giây", gif: "imgs/DB_SIDE_BEND.gif" },
            { name: "Mountain Climbers", sets: "3 sets x 30-60 giây", gif: "imgs/MOUNT_CLIMB.gif" },
            { name: "Crunches", sets: "3 sets x 30-60 giây", gif: "imgs/CRUNCH.gif" },
            { name: "Glute Bridge", sets: "3 sets x 30-60 giây", gif: "imgs/GLUTE_BRDG.gif" },
            { name: "Reverse Crunches", sets: "3 sets x 30-60 giây", gif: "imgs/ABS_AIR_BIKE.gif" },
            { name: "Russian Twist", sets: "3 sets x 30-60 giây", gif: "imgs/RUS_TWIST.gif" },
        ]
      }
    ]

const container = document.getElementById("gym-schedule");

schedule.forEach((day, index) => {
  const dayDiv = document.createElement("div");
  dayDiv.className = "mb-4 bg-white shadow rounded";

  const btn = document.createElement("button");
  btn.className = "w-full px-4 py-2 text-left flex justify-between items-center";
  btn.innerHTML = `<span class="font-semibold">${day.name}</span> <span class="text-xl font-bold">+</span>`;
  dayDiv.appendChild(btn);

  let contentRendered = false;
  let exercisesDiv;

  btn.addEventListener("click", () => {
    // Nếu nội dung chưa được render, tạo div và append
    if (!contentRendered) {
      exercisesDiv = document.createElement("div");
      exercisesDiv.className = "px-4 py-2 border-t space-y-4";

      day.exercises.forEach((exercise) => {
        const exerciseDiv = document.createElement("div");
        exerciseDiv.className = "flex items-center space-x-4";

        const img = document.createElement("img");
        img.src = exercise.gif;
        img.alt = exercise.name;
        img.className = "w-40 h-40 object-cover rounded";

        const infoDiv = document.createElement("div");
        infoDiv.className = "flex-1";

        const title = document.createElement("h3");
        title.className = "font-semibold";
        title.textContent = `${exercise.name} (${exercise.sets})`;

        const counterDiv = document.createElement("div");
        counterDiv.className = "flex items-center space-x-2 mt-2";

        const minusBtn = document.createElement("button");
        minusBtn.className = "bg-red-500 text-white px-2 py-1 rounded";
        minusBtn.textContent = "-";

        const countSpan = document.createElement("span");
        countSpan.className = "w-6 text-center";
        countSpan.textContent = "0";

        const plusBtn = document.createElement("button");
        plusBtn.className = "bg-green-500 text-white px-2 py-1 rounded";
        plusBtn.textContent = "+";

        let count = 0;
        minusBtn.addEventListener("click", () => {
          count--;
          countSpan.textContent = count;
        });
        plusBtn.addEventListener("click", () => {
          count++;
          countSpan.textContent = count;
        });

        counterDiv.appendChild(minusBtn);
        counterDiv.appendChild(countSpan);
        counterDiv.appendChild(plusBtn);

        infoDiv.appendChild(title);
        infoDiv.appendChild(counterDiv);

        exerciseDiv.appendChild(img);
        exerciseDiv.appendChild(infoDiv);

        exercisesDiv.appendChild(exerciseDiv);
      });

      dayDiv.appendChild(exercisesDiv);
      contentRendered = true;
    }

    // Toggle hiển thị
    exercisesDiv.style.display = ["none", "", null].includes(exercisesDiv.style.display)  ? "block" : "none";
    btn.querySelector("span:last-child").textContent =
      exercisesDiv.style.display === "none" ? "+" : "-";
  });

  container.appendChild(dayDiv);
});

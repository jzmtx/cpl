function updateStats() {
    // Get inputs
    const score = document.getElementById('input-score').value;
    const wickets = document.getElementById('input-wickets').value;
    const balls = document.getElementById('input-balls').value;
  
    const batsman1Name = document.getElementById('input-batsman1-name').value;
    const batsman1Runs = document.getElementById('input-batsman1-runs').value;
    const batsman1Balls = document.getElementById('input-batsman1-balls').value;
  
    const batsman2Name = document.getElementById('input-batsman2-name').value;
    const batsman2Runs = document.getElementById('input-batsman2-runs').value;
    const batsman2Balls = document.getElementById('input-batsman2-balls').value;
  
    const bowlerName = document.getElementById('input-bowler-name').value;
    const bowlerOvers = document.getElementById('input-bowler-overs').value;
    const bowlerRuns = document.getElementById('input-bowler-runs').value;
    const bowlerWickets = document.getElementById('input-bowler-wickets').value;
  
    // Update scoreboard
    document.getElementById('score').innerText = `${score}/${wickets}`;
    document.getElementById('overs').innerText = `${Math.floor(balls / 6)}.${balls % 6}`;
    document.getElementById('runrate').innerText = (score / (balls / 6)).toFixed(2);
  
    // Update batsman stats
    document.getElementById('batsman1-name').innerText = batsman1Name || "Batsman 1";
    document.getElementById('batsman1-runs').innerText = batsman1Runs || "0";
    document.getElementById('batsman1-balls').innerText = batsman1Balls || "0";
  
    document.getElementById('batsman2-name').innerText = batsman2Name || "Batsman 2";
    document.getElementById('batsman2-runs').innerText = batsman2Runs || "0";
    document.getElementById('batsman2-balls').innerText = batsman2Balls || "0";
  
    // Update bowler stats
    document.getElementById('bowler-name').innerText = bowlerName || "Bowler";
    document.getElementById('bowler-overs').innerText = bowlerOvers || "0.0";
    document.getElementById('bowler-runs').innerText = bowlerRuns || "0";
    document.getElementById('bowler-wickets').innerText = bowlerWickets || "0";
    document.getElementById('bowler-economy').innerText = 
      bowlerOvers > 0 ? (bowlerRuns / bowlerOvers).toFixed(2) : "0.00";
  }
  
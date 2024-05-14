function getMaximumGold(grid) {
    const m = grid.length;
    const n = grid[0].length;

    function dfs(x, y, visited) {
        visited.add(x * n + y);
        let maxGold = 0;

     
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

       
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0 && !visited.has(nx * n + ny)) {
                maxGold = Math.max(maxGold, dfs(nx, ny, visited));
            }
        }

        visited.delete(x * n + y);
        return maxGold + grid[x][y];
    }

    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                result = Math.max(result, dfs(i, j, new Set()));
            }
        }
    }

    return result;
}
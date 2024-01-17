
export function isCorrespondToFilter(driver, filterObj) {
    if (filterObj.name) {
		if (!driver.name.toLowerCase().includes(filterObj.name.toLowerCase())) return false
	}
	if (filterObj.intervalStart) {
		if (filterObj.intervalStart > driver.experience) return false
	}
	if (filterObj.intervalEnd)
		if (filterObj.intervalEnd < driver.experience) return false
	return true
}
